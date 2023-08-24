package com.pharmacy.controller;

import com.pharmacy.model.entity.Farmacia;
import com.pharmacy.service.FarmaciaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/principal/farmacia")
public class FarmaciaController {
    @Autowired
    FarmaciaService serviceFarmacia;
    @GetMapping("listado")
    public ResponseEntity<List<Farmacia>> getListaProductos(){
        return ResponseEntity.status(HttpStatus.OK).body(serviceFarmacia.getListadoFarmacias());
    }

    @GetMapping("/byID/{idFarmacia}")
    public ResponseEntity<Farmacia> getfarmaciaByID(@PathVariable Long idFarmacia){
        Farmacia farmacia = serviceFarmacia.getFarmaciaById(idFarmacia);
        if(farmacia!=null){
            return new ResponseEntity<Farmacia>(farmacia,HttpStatus.OK);
        } else{
            return  ResponseEntity.notFound().build();
        }
    }

}
