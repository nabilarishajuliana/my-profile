import React from 'react'
import { useState, useEffect } from "react";
import ImageCard from './ImageCard';
import data from "../data";
import { BiSearch} from 'react-icons/bi'


function Card() {
    const [search, setSearch] = useState('');
    const [isLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [q, setQ] = useState('');
    const [searchParam] = useState(['name', 'description', 'category']);
    const [labelCategory] = useState([
        { value: 'All', label: 'All Product By Category' },
        { value: 'Ready', label: 'Ready' },
        { value: 'Sold Out', label: 'Sold Out' },
        { value: 'Pre-Order', label: 'Pre-Order' },
    ]);
    const [filterParam, setFilterParam] = useState('All');
    const [product, setProduct] = useState([]);

    function cari(data) {
        isLoading(true);
        return data.filter((item) => {
            if (data.category === filterParam) {
                return searchParam.some((newItem) => {
                    return item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1;
                });
            } else if (filterParam === 'All') {
                return searchParam.some((newItem) => {
                    return item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1;
                });
            }
            isLoading(false);
        });
    }

    useEffect(() => {
        console.log(filterParam);
        const searchTerm = search.toLowerCase();
        let filteredData;
        if (search === '' && filterParam === 'All') {
            setProduct(data);
        } else {
            if (search !== '' && filterParam === 'All') {
                filteredData = data.filter((value) => {
                    return value.name.toLowerCase().match(new RegExp(searchTerm, 'g'));
                });
            } else if (search !== '' && filterParam !== 'All') {
                filteredData = data.filter((value) => {
                    return (
                        value.name.toLowerCase().match(new RegExp(searchTerm, 'g')) &&
                        value.category === filterParam
                    );
                });
            } else if (search === '' && filterParam === 'All') {
                filteredData = data.filter((value) => {
                    return value.category === filterParam;
                });
            } else if (search === '' && filterParam !== 'All') {
                filteredData = data.filter((value) => {
                    return value.category === filterParam;
                });
            }
            setProduct(filteredData);
        }
    }, [filterParam, search]);

    useEffect(() => {
        setProduct(data);
    }, []);



    return (
        <>
            <div className="container mx-auto px-12 pt-20 ">
                <div className="text-center text-4xl font-bold p-5 text-brown-color3">
                    <h3>Products</h3>
                </div>
                <div className="justify-center flex ">
                <div className='bg-white-color2 flex rounded-md mr-2 border-2 border-brown-color3'>
                <label className="logo-search flex items-center py-5 mx-3" ><BiSearch className='w-5 h-5 text-black' /></label>
                        <input
                            style={{ color: "black" }}
                            className="px-3 text-sm bg-white-color2 rounded-md"
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            placeholder="Search " />
                </div>
                    <select
                        onChange={(e) => {
                            setFilterParam(e.target.value);
                        }}
                        className="custom-select px-4 py-3 rounded-md bg-white-color2 border-2 border-brown-color3"
                        aria-label="Filter Product By Category"
                    >
                        {labelCategory.map((item) => {
                            return <option value={item.value}>{item.label}</option>;
                        })}
                    </select>
                    <span className="focus"></span>
                </div>

                <div className="text-center text-pink-color1 text-lg mb-8">
                    <p>{product.length} Product found</p>
                </div>
                {isLoading && <h1 className="text-5xl text-center mx-auto mt-32">Loading ....</h1>}
                {!isLoading && data.length === 0 && (
                    <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
                )}
                {data.length !== 0 && (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" onClick={() => setShowModal(true)}>
                        {product
                            .map((item) => (
                                <ImageCard key={item.id} item={item} coba={item.image} />
                            ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Card
