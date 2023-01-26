import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../layouts/Nav";

const Project = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then((res) => {
                setProjects(res.data);
                console.log(res.data.products)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className=" min-h-screen  bg-slate-300">
            <Nav />

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-center">
                {/* map products with product cards */}
                {projects?.map((project) => (
                    <Project
                        key={project?.products?.id}
                        id={project?.products?.id}
                        title={project?.products?.title}
                        image={project?.products?.image}
                        price={project?.products?.amount}
                        rating={project?.rating}
                    />
                ))}
            </div>
        </div>
    );
};

export default Project;