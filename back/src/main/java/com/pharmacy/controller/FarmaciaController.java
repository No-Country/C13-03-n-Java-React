package com.pharmacy.controller;

import com.pharmacy.model.entity.Farmacia;
import com.pharmacy.model.entity.FarmaciaDTO;
import com.pharmacy.model.entity.Mensaje;
import com.pharmacy.service.FarmaciaService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api/farmacia")
public class FarmaciaController {
    @Autowired
    FarmaciaService serviceFarmacia;
    @RequestMapping("/all")
    public ResponseEntity<List<Farmacia>> getListaProductos(){
        return ResponseEntity.status(HttpStatus.OK).body(serviceFarmacia.getListadoFarmacias());
    }

    @GetMapping("/get/{idFarmacia}")
    public ResponseEntity<Farmacia> getfarmaciaByID(@PathVariable Long idFarmacia){
        Farmacia farmacia = serviceFarmacia.getFarmaciaById(idFarmacia);
        if(farmacia!=null){
            return new ResponseEntity<Farmacia>(farmacia,HttpStatus.OK);
        } else{
            return  new ResponseEntity(new Mensaje("No se encontro la farmacia"), HttpStatus.OK);
        }
    }
    @GetMapping("/hello")
    public String sayHello() {
        return "hello";
    }

    @GetMapping("/index")
    public ResponseEntity<String> getIndex(){
        return ResponseEntity.status(HttpStatus.OK).body("OK");
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<Long> deletePost(@PathVariable Long id) {

        Farmacia farmacia = this.serviceFarmacia.getFarmaciaById(id);
        if (farmacia!=null) {
            serviceFarmacia.deleteFarmaciaById(id);
            return  new ResponseEntity(new Mensaje("Se elimino la farmacia"), HttpStatus.OK);
        }
        return  new ResponseEntity(new Mensaje("No se encontro la farmacia"), HttpStatus.NOT_FOUND);

    }

    @PostMapping("/add")
    public ResponseEntity crear( @RequestBody Farmacia farmacia){
        Farmacia newFarmacia = serviceFarmacia.addFarmacia(farmacia);
        return new ResponseEntity(new Mensaje("Se agrego la farmacia correctamente: ID = "+newFarmacia.getIdFarmacia().toString()),HttpStatus.OK);
    }
}
