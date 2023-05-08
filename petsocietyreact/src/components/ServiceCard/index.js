import React from 'react';
import { Button } from 'reactstrap';

function ServiceCard(props) {
    return (
        <div class="card mb-3">
                <img src={props.imageUrl}
                  class="card-img-top"
                  alt={props.imageAlt}
                  width="250"
                  height="360" />
                <div class="card-body">
                  <h5 class="card-title">{props.title}</h5>
                  <p class="card-text">
                    <small class="text-muted">{props.subtext}</small>
                  </p>
                  <p class="card-text">
                    {props.description}
                  </p>
                  <Button>
                    Book One Now!
                  </Button>
                </div>
              </div>
    );
}

export default ServiceCard;