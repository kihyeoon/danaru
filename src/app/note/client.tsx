"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import SignInWithOAuth from "@/app/note/signInWithOAuth";

import { client } from "@/lib/supabase/client";

const supabase = client();

interface Note {
  id: string;
  title: string;
  body: string;
  created_at: string;
}

const Client = () => {
  const [data, setData] = useState<Note[]>([]);

  const fetchData = async () => {
    const { data, error } = await supabase.from("notes").select("*");

    if (error) {
      console.error(error);
    } else {
      setData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInsert = async () => {
    const title = prompt("Enter a title");
    const body = prompt("Enter a body");
    console.log("handleClick => ", title, body);

    const { data, error } = await supabase
      .from("notes")
      .insert([{ title, body }])
      .select();

    if (error) {
      console.error(error);
    } else {
      console.log(data);
      fetchData();
    }
  };

  const handleDelete = async (id: string) => {
    const { data, error } = await supabase.from("notes").delete().eq("id", id);
    if (error) {
      console.error(error);
    } else {
      console.log(data);
      fetchData();
    }
  };

  const handleUpdate = async (id: string) => {
    const title = prompt(
      "수정할 제목을 입력하세요",
      data.find((note) => note.id === id)?.title,
    );
    const body = prompt(
      "수정할 내용을 입력하세요",
      data.find((note) => note.id === id)?.body,
    );

    if (!title || !body) return; // 취소하거나 빈 값인 경우 처리

    const { data: updatedData, error } = await supabase
      .from("notes")
      .update({ title, body })
      .eq("id", id)
      .select();

    if (error) {
      console.error("업데이트 중 오류 발생:", error);
    } else {
      console.log("업데이트된 데이터:", updatedData);
      fetchData(); // 데이터 새로고침
    }
  };

  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="mb-4 flex items-center gap-2">
          <div className="text-2xl">{item.title}</div>
          <div className="text-sm">{item.body}</div>
          <Button onClick={() => handleUpdate(item.id)}>수정</Button>
          <Button onClick={() => handleDelete(item.id)}>삭제</Button>
        </div>
      ))}
      <Button className="mt-8" onClick={handleInsert}>
        추가
      </Button>
      <SignInWithOAuth />
    </>
  );
};

export default Client;
