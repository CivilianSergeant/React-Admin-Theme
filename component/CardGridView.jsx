'use client'
import { useDispatch, useSelector } from "react-redux";
import BasicCard from "./BasicCard";
import { useEffect } from "react";
import { setInitialData } from "@/store/tableSlice";

function Loader() {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default function CardGridView({ datasource }) {

  const {items,loaded} = useSelector(state => state.tableData)
  const dispatch = useDispatch();

  useEffect(() => {

      dispatch(setInitialData(datasource))

  }, [datasource, dispatch])

  if(!loaded){
    return <Loader/>
  }
  if (loaded &&  items?.length === 0) {
    return <p className="text-center text-gray-500">No cards found.</p>;
  }
  return (
    <div className="p-6  min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {items?.map((item) => (
          <BasicCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}