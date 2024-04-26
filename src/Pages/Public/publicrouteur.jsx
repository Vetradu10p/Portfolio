import React from 'react';

import { Routes, Route, Navigate } from "react-router-dom";
import { Home, About, Project, Error404 } from "@/Pages/Public/index";

import Layout from "@/Layout/layout";
import ProjectDetail from '../Public/ProjectDetail/ProjectDetail'

const publicrouteur = () => {
    return (
      
        <Routes>
          <Route element={<Layout />}>

            <Route path="" element={<Navigate to="/home"/>} />

            <Route path="/home" element={<Home />} />
            <Route path='/project' element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/ProjectDetail/:id" element={<ProjectDetail />} />

            <Route path="*" element={<Error404 />} />

          </Route>
        </Routes>
     
    
    );
};

export default publicrouteur;