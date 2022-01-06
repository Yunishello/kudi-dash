import React from 'react';
import { Routes, Link, Route } from 'react-router-dom';

export default function Top() {
    return (
        <>

<nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
<div className="text-secondary text-uppercase font-italic">
                    Yunus Yusuf
                </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div className="col-md-9"></div>
            <div className="col-md-3 pt-3 mt-0">
                <button className="rounded-circle bg-light px-3 py-2 border-0">
                    <span className="fas fa-bell"></span>
                </button>
                <button className="rounded-circle bg-light px-3 py-2 border-0">
                    <span className="fas fa-list"></span>
                </button>
                <button className="rounded-circle bg-light px-3 py-2 border-0">
                    <span className="fas fa-map-marker-alt"></span>
                </button>
                <button className="rounded-circle bg-light px-3 py-2 border-0">
                    <img height="25x" width="25" src="https://app.kudipot.com/logo.png" />
                </button>
            </div>
  </div>
</nav>
        </>
    )
}
