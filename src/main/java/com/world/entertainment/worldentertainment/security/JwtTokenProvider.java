package com.world.entertainment.worldentertainment.security;

import com.world.entertainment.worldentertainment.exception.JwtAuthenticationException;
import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.util.Date;

@Component
public class JwtTokenProvider {

    private final UserDetailsService userDetailServiceImp;

    @Value("${jwt.header}")
    private String authorizationHeader;

    @Value("${jwt.TTL}")
    private long TTL;

    private PublicKey publicKey;

    private PrivateKey privateKey;

    public JwtTokenProvider(UserDetailServiceImp userDetailServiceImp) {
        this.userDetailServiceImp = userDetailServiceImp;
    }

    @PostConstruct
    private void init() throws NoSuchAlgorithmException {

        var keyPairGenerator = KeyPairGenerator.getInstance("RSA");
        keyPairGenerator.initialize(2048);

        var keyPair = keyPairGenerator.generateKeyPair();
        this.privateKey = keyPair.getPrivate();
        this.publicKey = keyPair.getPublic();
    }

    public String createToken(String userName, String role) {
        var claims = Jwts.claims().setSubject(userName);
        claims.put("role", role);
        var now = new Date();
        var validity = new Date(now.getTime() + TTL * 1000);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(validity)
                .signWith(SignatureAlgorithm.RS512, privateKey)
                .compact();
    }

    public boolean validateToken(String token) throws JwtAuthenticationException {
        try {
            var claimsJwt = Jwts.parser().setSigningKey(publicKey).parseClaimsJws(token);
            return !claimsJwt.getBody().getExpiration().before(new Date());
        } catch (JwtException | IllegalArgumentException e) {
            throw new JwtAuthenticationException("Jwt token is expired or invalid");
        }
    }

    public Authentication getAuthentication (String token) {
        var userDetail = userDetailServiceImp.loadUserByUsername(getUserName(token));
        return new UsernamePasswordAuthenticationToken(userDetail, "", userDetail.getAuthorities());
    }

    public String getUserName (String token) {
        return Jwts.parser().setSigningKey(publicKey).parseClaimsJws(token).getBody().getSubject();
    }

    public String resolveToken(HttpServletRequest request) {
        return request.getHeader(authorizationHeader);
    }
}
