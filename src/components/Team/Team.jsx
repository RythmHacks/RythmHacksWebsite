import './Team.scss'

import allan from '../../assets/Headshots/allan.jpg'
import ammar from '../../assets/Headshots/ammarpic.jpg'
import bella from '../../assets/Headshots/bellakim.jpeg'
import damian from '../../assets/Headshots/damian.png'
import daniel from '../../assets/Headshots/danielzhang.jpg'
import ellie from '../../assets/Headshots/elliekim.jpeg'
import hooman from '../../assets/Headshots/Hooman.jpg'
import jasmine from '../../assets/Headshots/jasminexu.png'
import jeffrey from '../../assets/Headshots/jeffrey.png'
import jim from '../../assets/Headshots/jimwang.jpg'
import khurram from '../../assets/Headshots/khurram.PNG'
import lifeng from '../../assets/Headshots/Lifeng.jpg'
import shamir from '../../assets/Headshots/shamir.png'

const people = [
    {
        name: "Jeffrey Zang",
        picture: jeffrey,
        link: 'https://www.linkedin.com/in/jeffreyzang2007',
        role: 'Co-Lead'
    },
    {
        name: "Khurram Shaikh",
        picture: khurram,
        link: 'https://www.linkedin.com/in/khurramshaikh/',
        role: 'Co-Lead'
    },
    {
        name: 'Jasmine Xu',
        picture: jasmine,
        link: 'https://www.linkedin.com/in/jasmine-xu-276873218/',
        role: 'Marketing Lead'
    },
    {
        name: 'Bella Kim',
        picture: bella,
        link: 'https://www.linkedin.com/in/gayeunbella/',
        role: 'Marketing'
    },
    {
        name: 'Jim Wang',
        picture: jim,
        link: 'https://www.linkedin.com/in/jim-wang-263877212/',
        role: 'Marketing'
    },
    {
        name: 'Allan George',
        picture: allan,
        link: 'https://www.linkedin.com/in/allan-george-003891239/',
        role: 'Logistics'
    },
    {
        name: 'Ammar Ahmad',
        picture: ammar,
        link: 'https://www.linkedin.com/in/ammar-ahmad-784470255/',
        role: 'Logistics'
    },
    {
        name: 'Daniel Zhang',
        picture: daniel,
        link: 'https://www.linkedin.com/in/daniel-zhang-0770a0249/',
        role: 'Logistics'
    },
    {
        name: "Damian Nikolic",
        picture: damian,
        link: 'https://www.linkedin.com/in/damian-nikolic-638813250/',
        role: 'Logistics'
    },
    {
        name: "Hooman Reza Nezhad",
        picture: hooman,
        link: 'https://www.linkedin.com/in/hooman-nezhad/',
        role: 'Finance Lead'
    },
    {
        name: 'Ellie Kim',
        picture: ellie,
        link: 'https://www.linkedin.com/in/ellie-k-b072b4252/',
        role: 'Finance'
    },
    {
        name: 'Shamir Khan',
        picture: shamir,
        link: 'https://www.linkedin.com/in/shamir-khan-40698123b/',
        role: 'Finance'
    },
    {
        name: "Li Feng Yin",
        picture: lifeng,
        link: 'https://www.linkedin.com/in/lifeng-yin/',
        role: 'Tech'
    }
]

const Team = () => {
    
    return (
        <div id='team'>
            <h3 className='text-center'>Our Team</h3>
            <p className='text-center'>The people working to make RythmHacks a reality</p>
            <div className='team-people'>
                {people.map((person) => {
                    return (
                        <img src={person.picture}></img>
                    )
                })}
            </div>
        </div>
    )
}

export default Team