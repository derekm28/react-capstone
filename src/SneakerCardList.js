import React from 'react';
import SneakerCard from './SneakerCard';

//Shows list of job cards
//used by Joblist and Company detail to list jobs
//receives an apply function prop which will be called by job card on apply

//JobList-->JobCardList -->JobCard
//CompanyDetail --> JobCardList-->JobCard

function SneakerCardList ({ sneakers }){
    console.debug('SneakerCardList', 'sneakers=', sneakers);

    return(
        <div className='SneakerCardList'>
            {sneakers.map(sneaker => (
                <SneakerCard
                    title={sneaker.title}
                    name={sneaker.name}
                    shoe={sneaker.shoe}
                    brand={sneaker.brand}
                />
            ))}
        </div>
    );
}

export default SneakerCardList;
