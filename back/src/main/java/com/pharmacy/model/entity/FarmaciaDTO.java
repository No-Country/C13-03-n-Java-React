package com.pharmacy.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FarmaciaDTO {

    private Long idFarmacia;
    private String nombre;
    private Long usuario;
    private String direccion;
    private String telefono;
    private String ubicacion;
    private String email;

}
