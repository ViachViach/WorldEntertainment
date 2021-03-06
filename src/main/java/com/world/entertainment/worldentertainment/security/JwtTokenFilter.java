package com.world.entertainment.worldentertainment.security;

import com.world.entertainment.worldentertainment.exception.JwtAuthenticationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtTokenFilter extends GenericFilterBean {

    private final JwtTokenProvider jwtTokenProvider;

    @Value("${jwt.prefix}")
    private String tokenPrefix;

    @Autowired
    public JwtTokenFilter(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    public void doFilter(
            ServletRequest servletRequest,
            ServletResponse servletResponse,
            FilterChain filterChain
    ) throws IOException, ServletException {
        var token = jwtTokenProvider.resolveToken((HttpServletRequest) servletRequest);

        if (!checkPrefixBearer(token)) {
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }

        token = token.replace(tokenPrefix, "").trim();

        try {
            if (!jwtTokenProvider.validateToken(token)) {
                filterChain.doFilter(servletRequest, servletResponse);
                return;
            }

            Authentication authentication = jwtTokenProvider.getAuthentication(token);
            if (authentication == null) {
                filterChain.doFilter(servletRequest, servletResponse);
                return;
            }

            SecurityContextHolder.getContext().setAuthentication(authentication);

        } catch (JwtAuthenticationException e) {
            SecurityContextHolder.clearContext();
            ((HttpServletResponse) servletResponse).sendError(e.getStatus().value());
            throw new JwtAuthenticationException("Jwt token is expired or invalid");
        }
        filterChain.doFilter(servletRequest, servletResponse);
    }

    private boolean checkPrefixBearer(String token) {
        return token != null && token.startsWith(tokenPrefix);
    }
}
