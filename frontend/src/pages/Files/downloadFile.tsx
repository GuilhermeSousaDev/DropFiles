import React, { FC, useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import api from '../../services/Axios';
import { FiDownload } from 'react-icons/fi';
import { Container, Title, Desc, Text, Button } from './style';
import { IFile } from '../../interfaces/IFile';
import ListFilesByEqualCategoryOrType from '../../components/List/categoryOrTypeFileList';
import { IDownload } from '../../interfaces/IDownloadFile';

const DownloadFile: FC = () => {
    const { id } = useParams();
    const [file, setFile] = useState<IDownload>();
    const [typeFile, setTypeFile] = useState<string>();

    useEffect(() => {
        window.scrollTo({ top: 0 });
        
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
                            download target="_blank" rel="noreferrer"
                        >
                            <Button onClick={handleDownloadFile}>
                                Download <FiDownload />
                            </Button>
                        </a>

                        <Title>Mais Arquivos</Title>
                
                        {file? 
                            <ListFilesByEqualCategoryOrType
                                category={file.file.category} 
                                type={file.file.type}
                                file_id={file.file.id}
                            /> 
                            : '...Loading'
                        }
                    </>
                    : '...Loading'
                }

                
            </Container>
        </>
    )
}

export default DownloadFile;