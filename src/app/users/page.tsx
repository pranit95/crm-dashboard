"use client";
import { fetchProjcts, getUsers } from "@/src/services/users";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import UserCard from "./_Card";
import { AuthContext } from "../_context/AuthContextProvider";
import DefaultPage from "@/src/component/DefaultPage";
import { useRouter } from "next/navigation";

const UsersPage = () => {
  const [page, setPage] = useState(0);
  const {
    isError,
    isPlaceholderData,
    isFetching,
    isPending,
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users", page],
    queryFn: () => fetchProjcts(page),
  });
  const auth = useContext(AuthContext);

  const router = useRouter();
  useEffect(() => {
    if (!auth?.user?.isLoggedIn) router.replace("/login");
  }, [auth, router]);

  console.log("user", { auth });
  // if (!auth?.user?.isLoggedIn)
  const handlePrevious = useCallback(() => {
    console.log("page previous");
    setPage((old) => Math.max(old - 1, 0));
  }, []);

  const handleNext = useCallback(() => {
    if (!isPlaceholderData && data?.hasNextPage) {
      setPage((old) => old + 1);
    }
  }, [isPlaceholderData, data?.hasNextPage]);

  const currentPage = useMemo(() => page + 1, [page]);

  return !auth?.user?.isLoggedIn ? (
    <DefaultPage />
  ) : isLoading ? (
    <div>Users loading...</div>
  ) : error ? (
    <div>Error Occured while fetching the data!!!!</div>
  ) : (
    <div className="w-full">
      <div className="flex h-[120px] gap-[10px] items-center justify-around w-full m-[20px]">
        <UserCard data={data} />
      </div>
      {isFetching ? (
        <div className="flex justify-center">Loading...</div>
      ) : null}
      <div className="flex items-center justify-center w-full gap-[10px]">
        <button
          className="cursor-pointer p-[5px] bg-green-300 text-white"
          onClick={handlePrevious}
          disabled={page === 0}
        >
          Previous
        </button>
        <div>{currentPage}</div>
        <button
          className="cursor-pointer p-[5px] bg-green-300 text-white"
          onClick={handleNext}
          disabled={isPlaceholderData && !data?.hasNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UsersPage;
