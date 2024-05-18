import { User } from "@/types/user.type"
import { appConfig } from "@/utils/config";
import { useState } from "react"

const getUser = (id: number) => {
    const [data, setData] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true);
    const baseUrl = appConfig;

    const getUser = async () => {
        
    }
}