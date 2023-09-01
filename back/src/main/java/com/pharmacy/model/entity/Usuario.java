package com.pharmacy.model.entity;

import jakarta.persistence.*;
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
    @Column
    String nombre;
    @Column
    String apellido;
    @Column
    String email;
    @Column
    String telefono;
    @Column(name = "nombre_usuario")
    String nombreUsuario;
    @Column
    String password;

}
