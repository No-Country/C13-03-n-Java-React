package com.pharmacy.service;

import com.pharmacy.model.entity.Farmacia;

import java.util.List;
import java.util.Optional;

public interface FarmaciaService {

    public List<Farmacia> getListadoFarmacias();
    public Farmacia getFarmaciaById(Long id);
    public Farmacia updateFarmaciaById(Long id,Farmacia farmacia);
    public  Farmacia addFarmacia(Farmacia farmacia);
    public  void deleteFarmaciaById(Long id);
}
