import React, {useEffect, useState} from 'react';
import axios from "axios";
import classes from "./style.module.scss";
import CardComponent from "../../shared/ui/CardComponent";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const Categories = () => {

    const [categories, setCategories] = useState(null);

    useEffect(() => {
        axios
            .get('http://94.139.255.120/api/article_types')
            .then(data => {
                setCategories(data.data);
                console.log(data.data);
            })
    }, []);



    return (
        <>
            <div className={`${classes['main-wrapper']} container`}>
                <h1 className={classes['title']}>Все категории</h1>
                <div className={classes['btn-row']}>
                    <AddCircleIcon style={{marginRight: '10px'}}/>
                    <Button variant="contained" color="success" className={classes['add']}><Link
                        to={'/categories/add_category'}> Добавить новую категорию</Link></Button>
                </div>
                <div className={classes['content']}>
                    <div className={classes['first-row']}>
                        <p className={classes['subtitle']}>Название</p>
                    </div>
                    {categories && categories.map(category => {
                        return (
                            <CardComponent id={category.id}
                                           key={category.id}
                                           name={category.name}/>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default Categories;