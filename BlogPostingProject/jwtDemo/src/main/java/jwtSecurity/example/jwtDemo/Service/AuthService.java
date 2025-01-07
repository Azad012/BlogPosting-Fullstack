package jwtSecurity.example.jwtDemo.Service;

import jwtSecurity.example.jwtDemo.Dto.LoginDto;
import jwtSecurity.example.jwtDemo.Model.User;

public interface AuthService {
    String login(LoginDto loginDto);
    String register(User user);
}