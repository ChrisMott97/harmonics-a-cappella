import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Auditions() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    router.push("/");
  }, []);
  return null;
}
