package com.pharmacy.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "TURNO")
@AllArgsConstructor
@Data
@NoArgsConstructor
public class Turno {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTurno;
    @Column
    private Integer aperturaHora;
    @Column
    private Integer aperturaMinuto;
    @Column
    private Integer cierraHora;
    @Column
    private Integer cierreMinuto;
}
