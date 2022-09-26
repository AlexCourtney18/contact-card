import "./form";
import "./submit";

import "../css/index.css";
import { Tooltip, Toast, Popver } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

import { initdb, getDb, postDb } from './database';


window.addEventListener('load', function () {
    initdb();
    getDb();
    postDb("Packerfan", "packerfan@email.com", 4148121212, "Lambeau");
    getDb();
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
});