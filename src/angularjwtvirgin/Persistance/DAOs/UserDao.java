package com.wecode.angularjwtvirgin.Persistance.DAOs;

import com.wecode.angularjwtvirgin.WebServices.Model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends CrudRepository<User, Long> {
    User findByUsername(String username);
}
