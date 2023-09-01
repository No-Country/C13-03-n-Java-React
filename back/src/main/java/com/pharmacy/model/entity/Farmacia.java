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
    private Long idFarmacia;
    @Column
    private String nombre;
//    @ManyToOne
//    @JoinColumn(foreignKey = @ForeignKey(name = "fk_farmacia_user"))
//    private Usuario usuario;
    @Column
    private String direccion;
    @Column
    private String telefono;

    @Column
    private String ubicacion;
    @Column
    private String email;


}
