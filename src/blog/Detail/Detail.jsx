import React from 'react'
import { useParams } from 'react-router-dom'

const dashValue = [
    {
        id:1,
        name:"Tisna",
        photos:"https://pbs.twimg.com/profile_images/1195500091341234176/mKJRu5Dt_400x400.jpg",
        price:"Rp 19.000"
    },
    {
        id:2,
        name:"Joko",
        photos:"https://aktual.com/wp-content/uploads/2021/07/Firaun-dalam-alquran-bag-2-1.jpg",
        price:"Rp 19.000"
    },
    {
        id:3,
        name:"Mukidi",
        photos:"https://media.hitekno.com/thumbs/2022/06/11/19468-bocah-sd-yang-main-menggunakan-topeng-ini-bikin-netizen-salfok-tiktok-atsipalinginsecure-67/730x480-img-19468-bocah-sd-yang-main-menggunakan-topeng-ini-bikin-netizen-salfok-tiktok-atsipalinginsecure-67.jpg",
        price:"Rp 17.000"
    },
    {
        id:4,
        name:"Jamil",
        photos:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfhY3ze-nJZCTabQ2KxWord3JPOiBNULx4Cg&usqp=CAU",
        price:"Rp 20.000"
    },
    {
        id:5,
        name:"Susi Jumba",
        photos:"https://pbs.twimg.com/media/FcgckjuakAAvqts.jpg",
        price:"Rp 19.000"
    },
    {
        id:6,
        name:"Jokowidodo",
        photos:"https://cdnwpseller.gramedia.net/wp-content/uploads/2022/12/siapa-joko-kendil-3.png",
        price:"Rp 19.000"
    }
]

export default function Detail() {
    const {id} = useParams()
    const product = dashValue.filter((value) => value.id == id);
  return (
    <div>
        <p>{product.id}</p>
        <p>{product.name}</p>
        <p>{product.price}</p>
    </div>
  )
}
