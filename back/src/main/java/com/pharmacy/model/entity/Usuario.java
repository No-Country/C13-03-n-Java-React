package com.pharmacy.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Usuario {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    Long id;
    String nombre;
    String apellido;
    String email;
    String telefono;
    String nombreUsuario;
    String password;
}
