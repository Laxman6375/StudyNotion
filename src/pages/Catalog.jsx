import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiConnector } from "../services/apiconnector";
import { categories } from "../services/apis";
import { getCatalogaPageData } from "../services/operations/pageAndComponentData";
import CourseSlider from "../components/core/Catalog/CourseSlider";
import CourseCard from "../components/core/Catalog/CourseCard";

const Catalog = () => {
  const { catalogName } = useParams();
  const [catalogPageData, setCatalogPageData] = useState(null);
  const [categoryId, setCategoryId] = useState("");
   const [activeOption, setActiveOption] = useState(1);

  //Fetch all categories
  useEffect(() => {
    const getCategories = async () => {
      const res = await apiConnector("GET", categories.CATEGORIES_API);
      const category_id = res?.data?.data?.filter(
        (ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName
      )[0]._id;
      setCategoryId(category_id);
    };
    getCategories();
  }, [catalogName]);

  useEffect(() => {
    const getCategoryDetails = async () => {
      try {
        if (categoryId) {
          const res = await getCatalogaPageData(categoryId);
          //  console.log("Printing res", res);
          setCatalogPageData(res);
        }
      } catch (error) {
        // console.log(error);
      }
    };
    getCategoryDetails();
  }, [categoryId]);

  return (
    <div className=" text-white">
      <div className="flex flex-col gap-3 px-4 lg:px-[7rem] bg-richblack-800   py-8">
        <p className=" text-richblack-300 font-normal text-base leading-5">
          {`Home / Catalog / `}
          <span className=" text-yellow-50">
            {catalogPageData?.data?.selectedCategory?.name}
          </span>
        </p>
        <p className=" text-richblack-5 text-3xl font-medium leading-9">
          {catalogPageData?.data?.selectedCategory?.name}
        </p>
        <p className=" text-richblack-200 font-normal text-sm leading-5">
          {catalogPageData?.data?.selectedCategory?.description}
        </p>
      </div>

      <div className="lg:px-[7rem] mt-12 mx-4 lg:mx-0">
        {/* section 1 */}
        <div className=" flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className=" text-richblack-5 font-semibold text-2xl lg:text-3xl leading-9">
              Courses to get you started
            </p>
            <div className=" flex gap-x-3 border-b border-richblack-600">
              <button
                onClick={() => {
                  setActiveOption(1);
                }}
                className={
                  activeOption === 1
                    ? `px-4 py-2 border-b border-b-yellow-25 text-yellow-25 cursor-pointer`
                    : `px-4 py-2 text-richblack-50 cursor-pointer`
                }
              >
                Most Populer
              </button>
              <button
                onClick={() => {
                  setActiveOption(2);
                }}
                className={
                  activeOption === 1
                    ? "px-4 py-2 text-richblack-50 cursor-pointer"
                    : "px-4 py-2 border-b border-b-yellow-25 text-yellow-25 cursor-pointer"
                }
              >
                New
              </button>
            </div>
          </div>
          <div>
            <CourseSlider
              Courses={catalogPageData?.data?.selectedCategory?.course}
            />
          </div>
        </div>

        {/* section 2 */}
        <div className=" mt-10">
          <p className=" text-richblack-5 font-semibold text-2xl lg:text-3xl leading-9">
            Top Courses in{" "}
            <span>{catalogPageData?.data?.selectedCategory?.name}</span>
          </p>
          <div>
            <CourseSlider
              Courses={catalogPageData?.data?.differentCategory?.course}
            />
          </div>
        </div>

        {/* section 3 */}
        <div className=" mt-10">
          <div className=" text-richblack-5 font-semibold text-2xl lg:text-3xl leading-9">
            Frequently Bought Together
          </div>
          <div className="  py-8">
            <div className="grid grid-cols-2 gap-6">
              {catalogPageData?.data?.mostSellingCourses
                ?.slice(0, 4)
                .map((course, index) => {
                  return (
                    <CourseCard
                      course={course}
                      key={index}
                      Height={"h-[100px] lg:h-[400px]"}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
    </div>
  );
};

export default Catalog;
