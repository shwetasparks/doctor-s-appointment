import appointment from "./appointment_img.png"
import header_img from "./header_img.png"
import groupProfiles from "./group_profiles.png"
import contactImg from "./contact_image.png"
import logo from "./logo.svg"
import dropdownIcon from "./dropdown_icon.svg"
import menu_icon from "./dropdown_icon.svg"
import cross_icon from "./cross_icon.png"
import chats_icon from "./chats_icon.svg"
import verified_icon from "./verified_icon.svg"
import arrow_icon from "./arrow_icon.svg"
import info_icon from "./info_icon.svg"
import upload_icon from "./upload_icon.png"
import stripe_logo from "./stripe_logo.png"
import razorpay_logo from "./razorpay_logo.png"
import profile_pic from "./profile_pic.png"
import doc1 from "./doc1.png"
import doc2 from "./doc2.png"
import doc3 from "./doc3.png"
import doc4 from "./doc4.png"
import doc5 from "./doc5.png"
import doc6 from "./doc6.png"
import doc7 from "./doc7.png"
import doc8 from "./doc8.png"
import doc9 from "./doc9.png"
import doc10 from "./doc10.png"
import doc11 from "./doc11.png"
import doc12 from "./doc12.png"
import doc13 from "./doc13.png"
import doc14 from "./doc14.png"
import Gastroenterologist from "./Gastroenterologist.svg"
import  Dermatologist from "./Dermatologist.svg"
import  Neurologist from "./Neurologist.svg"
import  Pedatricians from "./Pediatricians.svg"
import  General_physician from "./General_physician.svg"
import  Gynecologist from "./Gynecologist.svg"

export const assets={
    appointment,
    header_img,
    groupProfiles,
    contactImg,
    logo,
    dropdownIcon,
    menu_icon,
    cross_icon,
    chats_icon,
    verified_icon,
    arrow_icon,
    info_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    profile_pic,
    doc1,
    doc2,
    doc3,
    doc4,
    doc5,
    doc6,
    doc7,
    doc8,
    doc9,
    doc10,
    doc11,
    doc12,
    doc13,
    doc14,
    Gastroenterologist,
    Dermatologist,
    Neurologist,
    Pedatricians,
    General_physician,
    Gynecologist
}
    
export const specialityData=[
    {
        speciality:'General Physician',
        image:General_physician
    
    },
    {
        speciality:'Gastroenterologist',
        image: Gastroenterologist
    },
    {
        speciality:'Dermatologist',
        image: Dermatologist
    },
    {
        speciality:'Neurologist',
        image: Neurologist
    },
    {
        speciality:'Pedatricians',
        image: Pedatricians
    },{
        speciality:'Gynecologist',
        image: Gynecologist
    }
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. John Doe',
        speciality: 'General Physician',
        image: General_physician,
        about: 'Dr. John Doe is a highly skilled General Physician with years of experience.',
        fees: 50,
        experience: '4 years',
        degree: 'MBBS',
        address: {
            line1: '123 Main St.',
            line2: 'City A, State X'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Jane Smith',
        speciality: 'Dermatologist',
        image: Dermatologist,
        about: 'Dr. Jane Smith specializes in treating skin conditions with over 5 years of experience.',
        fees: 70,
        experience: '5 years',
        degree: 'MD in Dermatology',
        address: {
            line1: '456 Elm St.',
            line2: 'City B, State Y'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Robert Brown',
        speciality: 'Gastroenterologist',
        image: Gastroenterologist,
        about: 'Dr. Robert Brown is an expert in digestive system disorders.',
        fees: 80,
        experience: '6 years',
        degree: 'MD in Gastroenterology',
        address: {
            line1: '789 Oak St.',
            line2: 'City C, State Z'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Emily Davis',
        speciality: 'Neurologist',
        image: Neurologist,
        about: 'Dr. Emily Davis focuses on brain and nervous system health.',
        fees: 90,
        experience: '7 years',
        degree: 'MD in Neurology',
        address: {
            line1: '321 Pine St.',
            line2: 'City D, State W'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Michael Wilson',
        speciality: 'Pediatrician',
        image: Pedatricians,
        about: 'Dr. Michael Wilson specializes in child health and development.',
        fees: 60,
        experience: '5 years',
        degree: 'MD in Pediatrics',
        address: {
            line1: '654 Maple St.',
            line2: 'City E, State V'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Linda Johnson',
        speciality: 'Gynecologist',
        image: Gynecologist,
        about: 'Dr. Linda Johnson provides comprehensive care for women’s health.',
        fees: 75,
        experience: '8 years',
        degree: 'MD in Gynecology',
        address: {
            line1: '987 Cedar St.',
            line2: 'City F, State U'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. William Lee',
        speciality: 'General Physician',
        image: General_physician,
        about: 'Dr. William Lee is known for his holistic approach to healthcare.',
        fees: 55,
        experience: '4 years',
        degree: 'MBBS',
        address: {
            line1: '111 Birch St.',
            line2: 'City G, State T'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Susan Miller',
        speciality: 'Dermatologist',
        image: Dermatologist,
        about: 'Dr. Susan Miller is a renowned dermatologist specializing in skin cancer.',
        fees: 85,
        experience: '6 years',
        degree: 'MD in Dermatology',
        address: {
            line1: '222 Spruce St.',
            line2: 'City H, State S'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Charles Garcia',
        speciality: 'Gastroenterologist',
        image: Gastroenterologist,
        about: 'Dr. Charles Garcia focuses on the treatment of gastrointestinal diseases.',
        fees: 95,
        experience: '9 years',
        degree: 'MD in Gastroenterology',
        address: {
            line1: '333 Fir St.',
            line2: 'City I, State R'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Patricia Hernandez',
        speciality: 'Neurologist',
        image: Neurologist,
        about: 'Dr. Patricia Hernandez specializes in neurological disorders and treatments.',
        fees: 100,
        experience: '10 years',
        degree: 'MD in Neurology',
        address: {
            line1: '444 Willow St.',
            line2: 'City J, State Q'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. James Thompson',
        speciality: 'Pediatrician',
        image: Pedatricians,
        about: 'Dr. James Thompson provides compassionate care for children.',
        fees: 65,
        experience: '5 years',
        degree: 'MD in Pediatrics',
        address: {
            line1: '555 Poplar St.',
            line2: 'City K, State P'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Jessica Martinez',
        speciality: 'Gynecologist',
        image: Gynecologist,
        about: 'Dr. Jessica Martinez focuses on reproductive health and gynecological conditions.',
        fees: 80,
        experience: '7 years',
        degree: 'MD in Gynecology',
        address: {
            line1: '666 Chestnut St.',
            line2: 'City L, State O'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Brian Wilson',
        speciality: 'General Physician',
        image: General_physician,
        about: 'Dr. Brian Wilson offers general medical services with a patient-centered approach.',
        fees: 50,
        experience: '3 years',
        degree: 'MBBS',
        address: {
            line1: '777 Ash St.',
            line2: 'City M, State N'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Sarah Taylor',
        speciality: 'Neurologist',
        image: Neurologist,
        about: 'Dr. Sarah Taylor specializes in the treatment of neurological conditions and disorders.',
        fees: 110,
        experience: '11 years',
        degree: 'MD in Neurology',
        address: {
            line1: '888 Fir St.',
            line2: 'City N, State M'
        }
    }
];