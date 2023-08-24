package com.pharmacy.service;

import com.pharmacy.model.entity.Farmacia;
import com.pharmacy.repository.FarmaciaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FarmaciaServiceImp implements FarmaciaService{

    @Autowired
    private FarmaciaRepository repo;

    @Override
    public List<Farmacia> getListadoFarmacias() {
        return repo.findAll();
    }

    @Override
    public Farmacia getFarmaciaById(Long id) {
        return repo.findById(id).get();
    }

    @Override
    public Farmacia updateFarmaciaById(Long id, Farmacia farmacia) {
        Farmacia farmaciaExistente = repo.findById(id).get();
        BeanUtils.copyProperties(farmacia, farmaciaExistente);

        return repo.saveAndFlush(farmaciaExistente);
    }

    @Override
    public Farmacia addFarmacia(Farmacia farmacia) {
        return repo.save(farmacia);
    }
    @Override
    public Farmacia deleteFarmaciaById(Long id) {

        return repo.remove(id);
    }
}
