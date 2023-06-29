import React from 'react'
import { useState } from 'react'
import Card from '../../components/Card/Card'
import "./dashboard.css"
import { useNavigate } from 'react-router-dom'
import {GrFormClose} from "react-icons/gr"
import {GrAdd} from "react-icons/gr"


export default function Dashboard() {
    const [dashValue,setDashValue] = useState([
        {
            id:1,
            name:"Tisna",
            photos:"https://pbs.twimg.com/profile_images/1195500091341234176/mKJRu5Dt_400x400.jpg",
            price:90000,
            kategori:"Manusia"
        },
        {
            id:2,
            name:"Joko",
            photos:"https://aktual.com/wp-content/uploads/2021/07/Firaun-dalam-alquran-bag-2-1.jpg",
            price:80000,
            kategori:"Kumbang"
        },
        {
            id:3,
            name:"Mukidi",
            photos:"https://media.hitekno.com/thumbs/2022/06/11/19468-bocah-sd-yang-main-menggunakan-topeng-ini-bikin-netizen-salfok-tiktok-atsipalinginsecure-67/730x480-img-19468-bocah-sd-yang-main-menggunakan-topeng-ini-bikin-netizen-salfok-tiktok-atsipalinginsecure-67.jpg",
            price:80000,
            kategori:"Manusia"
        },
        {
            id:4,
            name:"Jamil",
            photos:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfhY3ze-nJZCTabQ2KxWord3JPOiBNULx4Cg&usqp=CAU",
            price:80000,
            kategori:"Kumbang"
        },
        {
            id:5,
            name:"Susi Jumba",
            photos:"https://pbs.twimg.com/media/FcgckjuakAAvqts.jpg",
            price:7000,
            kategori:"Kumbang"
        },
        {
            id:6,
            name:"Jokowidodo",
            photos:"https://cdnwpseller.gramedia.net/wp-content/uploads/2022/12/siapa-joko-kendil-3.png",
            price:7000,
            kategori:"Manusia"
        },
        {
            id:7,
            name:"Jokowidodo",
            photos:"https://cdnwpseller.gramedia.net/wp-content/uploads/2022/12/siapa-joko-kendil-3.png",
            price:7000,
            kategori:"Kumbang"
        },
        {
            id:8,
            name:"Jokowidodo",
            photos:"https://cdnwpseller.gramedia.net/wp-content/uploads/2022/12/siapa-joko-kendil-3.png",
            price:655444,
            kategori:"Mamalia"
        },
        {
            id:9,
            name:"Jokowidodo",
            photos:"https://cdnwpseller.gramedia.net/wp-content/uploads/2022/12/siapa-joko-kendil-3.png",
            price:655444,
            kategori:"Manusia"
        },
        {
            id:10,
            name:"Jokowidodo",
            photos:"https://cdnwpseller.gramedia.net/wp-content/uploads/2022/12/siapa-joko-kendil-3.png",
            price:655444,
            kategori:"Manusia"
        }
    ])
    
    const [popup,setPopup] = useState();
    const [search,setSearch]=useState('');
    const [sort,setSort]=useState('Asc');
    const [sortBy,setSortBy]=useState('');
    const [pagination,setPagination]=useState(1);
    const [popupEdit,setPopupEdit] = useState();
    const [newValue,setNewValue] = useState();
    const [kategori,setKategori] = useState("");
    const [min,setMin] = useState(0);
    const [max,setMax] = useState(0);
    const [minKonten,setMinKonten]=useState(3);
    const [cart, setCart] = useState([]);
    const [hps,setHps] = useState();
    const nav = useNavigate();

    const fil = dashValue.toSorted((a,b)=>{
            if(sort == 'Asc'){
                return a[sortBy] < b[sortBy] ? -1:1; 
            }else{
                return a[sortBy] > b[sortBy] ? -1:1; 
            }
        }).filter((value,i)=> min > 0 ? value.price >= min : max >0 ? value.price <= max : kategori !== "" ? value.kategori === kategori : value.id != hps && value.name.toLowerCase().includes(search) &&
        i >= minKonten * pagination - minKonten && i < pagination * minKonten);
 
  return (
    <div>
        <div id='search'>
            <div>
                <input className='sch' type="text" value={search} placeholder='Name...' onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            <div>
                <select onChange={(e) => setSortBy(e.target.value)} className='sch' name="" id="">
                    <option value="id">ID</option>
                    <option value="name">Nama Product</option>
                    <option value="price">Harga Product</option>
                </select>
            </div>
            <div>
                <select onChange={(e) => setSort(e.target.value)} className='sch' name="" id="">
                    <option value="Asc">Asc</option>
                    <option value="Dsc">Desc</option>
                </select>
            </div>
            <div>
                <button onClick={()=>setNewValue("set")} className="sch"><GrAdd/>Buat</button>
            </div>
            <div>
                <select className='sch' name="" id="" onChange={(e)=>setKategori(e.target.value)}>
                        <option value="">Kategori</option>
                        <option value="Manusia">Manusia</option>
                        <option value="Mamalia">Mamalia</option>
                        <option value="Kumbang">Kumbang</option>
                </select>
            </div>
            <div id='min-max'>
                <label htmlFor="min">
                    Minimal :
                    <input name='min' type="text" onChange={(e)=>setMin(parseInt(e.target.value))}/>
                </label>
                <label htmlFor="max">
                    Maximal :
                    <input name='max' type="text" onChange={(e)=>setMax(parseInt(e.target.value))}/>
                </label>
            </div>
            <div>

            </div>
        </div>
        <div id='container'>
            {
                fil.map((value,i)=>{
                    return <Card key={value.id}>
                        <img src={value.photos} alt="" className='img-contain' /><br /><br />
                        <p className='nm-con con'>{value.name}</p><br />
                        <p className='pr-con con'>Rp {value.price.toLocaleString()}</p>
                        <br />
                        <div>
                            <button className='detail-btn' onClick={()=>setPopup(value)}>Detail Barang</button>
                            <button className='detail-btn' onClick={()=>setPopupEdit(value)}>Edit</button>
                            <button className='detail-btn' onClick={()=>{
                                alert(`"Yakin Mau Menghapus ${value.name}"`)
                                setHps(value.id)
                            }}>Hapus</button>
                        </div>
                    </Card>
                })
            }
        </div>
        <div className='pag-btn'>
            <label htmlFor="">
                Min Konten :
                <input type="number" onChange={e=>setMinKonten(parseInt(e.target.value))} value={minKonten}/>
            </label>
            <button onClick={()=>setPagination(pagination-1)} disabled={pagination === 1}>Sebelumnya</button>
            {pagination}
            <button onClick={()=>setPagination(pagination+1)} disabled={pagination === Math.ceil(dashValue.length/3)}>Selanjutnya</button>
        </div>

        {
            popup && (
                <div className='pop-up'>
                        <button onClick={()=>{setPopup()}}><GrFormClose size={20} /></button>
                        <h1>Detail People</h1>
                        <h3>{popup.name}</h3>
                        <img src={popup.photos} alt={popup.name}/>
                        <p>{popup.price}</p>
                </div>
            )
        }
        {
            popupEdit && (
                <form action="" className='pop-up'>
                    <h1>Edit People</h1>
                    <label htmlFor="">
                        Nama :
                        <input className='inp-ed' type="text" value={popupEdit.name} onChange={(e)=>setPopupEdit({...popupEdit,name:e.target.value})} />   
                    </label>
                    <label htmlFor="">
                        Gambar :
                        <input className='inp-ed' type="text" value={popupEdit.photos} onChange={(e)=>setPopupEdit({...popupEdit,photos:e.target.value})} />
                    </label>
                    <label htmlFor="">
                        Harga :
                        <input className='inp-ed' type="text" value={popupEdit.price} onChange={(e)=>setPopupEdit({...popupEdit,price:e.target.value})} />
                    </label>
                    <label htmlFor="">
                        <select className='inp-ed sel' name="" id="" onChange={(e)=> setNewValue({...popupEdit,kategori:e.target.value})}>
                            <option value="">Kategori</option>
                            <option value="Manusia">Manusia</option>
                            <option value="Mamalia">Mamalia</option>
                            <option value="Kumbang">Kumbang</option>
                        </select>
                    </label>
                    <div id='ed-btn'>
                        <button className='detail-btn ed-bt' onClick={(e)=>{
                            e.preventDefault()
                            console.log(popupEdit.name)
                            setDashValue(dashValue.map((value)=>{
                                if (value.id === popupEdit.id){
                                    return{
                                        ...value,
                                        name:popupEdit.name,
                                        price:parseInt(popupEdit.price)
                                    }
                                }else{
                                    return value
                                }
                        }))
                        setPopupEdit()
                        }}>Simpan</button>
                        <button className='detail-btn ed-bt' type='button' onClick={()=>setPopupEdit()}>Batal</button>
                    </div>
                </form>
            )
        }
        {
            newValue &&(
                <form action="" className='pop-up'>
                    <label htmlFor="">
                        Nama :
                        <input className='inp-ed' type="text" onChange={(e)=>setNewValue({...newValue,name:e.target.value})}/>
                    </label>
                    <label htmlFor="">
                        Price :
                        <input className='inp-ed' type="text" onChange={(e)=>setNewValue({...newValue,price:parseInt(e.target.value)})}/>
                    </label>
                    <label htmlFor="">
                        Photos :
                        <input className='inp-ed' type="text"onChange={(e)=>setNewValue({...newValue,photos:e.target.value})} />
                    </label>
                    <label htmlFor="">
                        <select className='inp-ed sel' name="" id="" onChange={(e)=> setNewValue({...newValue,kategori:e.target.value})}>
                            <option value="">Kategori</option>
                            <option value="Manusia">Manusia</option>
                            <option value="Mamalia">Mamalia</option>
                            <option value="Kumbang">Kumbang</option>
                        </select>
                    </label>
                    <div>
                        <button className='detail-btn' onClick={(e)=>{
                            e.preventDefault()
                            setNewValue({...newValue,id:dashValue.length+1})
                            setDashValue([...dashValue,newValue])
                            setNewValue()
                        }}>Upload</button>
                        <button onClick={()=>setNewValue()} className='detail-btn'>Batal</button>
                    </div>
                </form>
            )
        }
    </div>
  )
}
