import React, { FC, useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import api from '../../services/Axios';
import { FiDownload } from 'react-icons/fi';
import { Container, Title, Desc, Text, Button } from './style';
import { IFile } from '../../interfaces/IFile';

interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    avatar: string
    createdAt: Date;
    updatedAt: Date;
}

interface IDownload {
    file: {
        id: number
        name: string
        description: string
        category: string;
        type: string
        file: string
        downloads: number;
        user: IUser;
        createdAt: Date;
        updatedAt: Date;
    }
    size: string;
}

const DownloadFile: FC = () => {
    const navigate = useNavigate();
    
    const { id } = useParams();
    const [file, setFile] = useState<IDownload>();
    const [typeFile, setTypeFile] = useState<string>();

    useEffect(() => {
        (async () => {
            const { data } = await api.get<IDownload>(`files/${id}`);

            setFile(data);
            setTypeFile(data.file.file.split('.')[1]);
        })();
    }, [id]);

    const handleDownloadFile = useCallback(async () => {
        await api.post<IFile>('files/download', { 
            file_id: id,
        });
    }, [id]);

    return (
        <>
            <Navbar />
            <Container>
                {file?
                    <>
                        <Title>{file.file.name}</Title>  
                        <br />
                        <Desc>{file.file.description}</Desc>
                        <Text>Type: {file.file.type}</Text>
                        <Text>Category: {file.file.category}</Text>
                        <Text>{file.file.file}</Text>
                        <Text>Downloads: {file.file.downloads}</Text>
                        <Title>Uploaded_By - {file.file.user.name}</Title>
                        <Text>Size: {file.size}</Text>

                        {typeFile === 'jpg' || typeFile === 'jpeg' || typeFile === 'png'?
                            <img 
                                style={{
                                    width: '180px',
                                    height: '279px',
                                    borderRadius: '5px',
                                }}
                                src={`http://localhost:8081/files/${file.file.file}`} 
                                alt="" 
                            /> 
                            : ''
                        }
                        
                        <a 
                            href={`http://localhost:8081/files/${file.file.file}`} 
                            download
                        >
                            <Button onClick={handleDownloadFile}>
                                Download <FiDownload />
                            </Button>
                        </a>
                    </>
                    : '...Loading'
                }
            </Container>
        </>
    )
}

export default DownloadFile;