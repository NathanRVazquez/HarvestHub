/* Author: Tor Sdayur */

import '../styles/Card.css'

export default function Card({title, phone, address, days, hours}) {
    let processed_days = getProcessedDays(days);
    console.log(days)
    return (
        <div
            className="card"
        >
            <h2>{title}</h2>
            <div className="times">
                {processed_days + ': ' + hours}
            </div>
            <footer className="contact_info">
                <h6>{phone}</h6>
                <h6>{address}</h6>
            </footer>
        </div>
    );
}

//format days
function getProcessedDays(u_days)
{
    let a = '';
    let days = {
        m: 'Mon',
        tu: 'Tue',
        w: 'Wed',
        th: 'Thur',
        f: 'Fri',
        sa: 'Sat',
        su: 'Sun'
    };
    for (const day of u_days)
    {
        a += days[day] + ", ";
    }
    return a.substring(0, a.length - 2);
}