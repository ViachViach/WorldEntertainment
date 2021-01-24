package com.world.entertainment.worldentertainment.security;

import com.world.entertainment.worldentertainment.exception.JwtAuthenticationException;
import org.springframework.beans.factory.annotation.Autowired;
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
        try {
            if (token == null || !jwtTokenProvider.validateToken(token)) {
                return;
            }

            Authentication authentication = jwtTokenProvider.getAuthentication(token);
            if (authentication == null) {
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
}