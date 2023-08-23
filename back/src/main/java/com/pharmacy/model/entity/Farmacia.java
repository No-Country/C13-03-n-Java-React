package com.pharmacy.model.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "FARMACIA")
@AllArgsConstructor
@Data
@NoArgsConstructor
public class Farmacia {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    Long idFarmacia;

    String nombre;
    String direccion;
    String telefono;
    int aperturaHora;
    int aperturaMinuto;
    int cierraHora;
    int cierreMinuto;
    String ubicacion;
    String email;


}
