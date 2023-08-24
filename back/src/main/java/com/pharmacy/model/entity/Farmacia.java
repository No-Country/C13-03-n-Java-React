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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idFarmacia;

    String nombre;
    String direccion;
    String telefono;
    Integer aperturaHora;
    Integer aperturaMinuto;
    Integer cierraHora;
    Integer cierreMinuto;
    String ubicacion;
    String email;


}
