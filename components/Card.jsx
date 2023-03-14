
import ImageCard from './ImageCard';
import React, { useEffect, useState } from "react";
// import Link from "next/link";

function Card() {
    const [keyword, setKeyword] = useState("");
    const [hasilFilter, setHasilfilter] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([]);


    const handlefilter = (e) => {
        const filterData = data.filter((e) => {
            return e.category.toLowerCase().includes(keyword.toLowerCase());
        });
        setHasilfilter(filterData);
    };
    console.log(keyword);

    useEffect(() => {
        handlefilter();
    }, [data, keyword]);

    function getFiltered(filtered) {
        if (filtered === 0) {
            return "Barang Tidak Ada";
        } else {
            return filtered + " Products ";
        }
    }

    useEffect(() => {

        async function getData() {
            try {
                const response = await fetch("https://api.jsonbin.io/v3/b/640ee172c0e7653a0587007a");
                const data = await response.json();
                setData(data.record);

            } catch (err) {
                console.log(err);
            }
        }

        getData();
    }, []);

    return (
        <>
            <div className="p-5 text-black z-[2] mt-20">
                <div className="text-center text-4xl font-bold  text-brown-color3">
                    <h3>Products</h3>
                </div>
            </div>
            <div className="templateContainer">
                <div className="searchInput_Container flex items-center justify-center mx-auto my-0 pt-5 ">
                    <input
                        className="border w-3/12 p-2.5 rounded-[10px] border-solid border-black"
                        id="searchInput"
                        type="text "
                        placeholder="Search Here"
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}
                    />

                    <div className="filter-area">
                        <form onChange={handlefilter}>
                            <select
                                className="filter border h-[45px] w-[110px] mx-2.5 my-0 rounded-[10px] border-solid border-black"
                                name="isAvailable"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                            >
                                <option value="">All</option>
                                <option value="Ready">Ready</option>
                                <option value="Sold Out">Sold Out</option>
                                <option value="Pre-Order">Pre-Order</option>
                            </select>
                        </form>
                    </div>
                </div>

                <div className="information w-1/5 text-center mx-auto my-0 pt-2.5">
                    {getFiltered(hasilFilter.length)}
                </div>

                <div className="template_Container items-center justify-center grid relative grid-cols-[repeat(4,1fr)] mx-auto my-0 px-[5%] p-[2%] ">
                    {hasilFilter.length > 0
                        ? hasilFilter
                            .filter((products) =>
                                searchTerm !== ""
                                    ? products.name.toLowerCase().includes(searchTerm)
                                    : products
                            )
                            .map((item) => (
                                <ImageCard key={item.id} item={item} coba={item.image} />
                            ))
                        : data
                            .filter((val) => {
                                if (searchTerm == "") {
                                    return val;
                                } else if (
                                    val.name.toLowerCase().includes(searchTerm.toLowerCase())
                                ) {
                                    return val;
                                }
                            })
                            .map((val) => {
                                return (
                                    <div className="template" key={val.id}>
                                        <img src={val.image} alt="" />
                                        <h3 className="card-name">{val.name}</h3>
                                        <p className="card-text">{val.description}</p>
                                        <p className="price">Rp {val.price}</p>
                                        <button className="px-8 py-2 border">Book</button>
                                    </div>
                                );
                            })}
                </div>
            </div>
        </>
    );
}

export default Card;