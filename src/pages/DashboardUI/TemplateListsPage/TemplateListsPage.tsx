import React, { useEffect, useState } from 'react'
import "./TemplateListsPage.css"
import useTemplate from '../../../hooks/useTemplate';
import { Link } from 'react-router-dom';
import { Template } from '../../../utils/types';
import useToast from '../../../hooks/useToast';



const TemplateListsPage: React.FC = () => {
    const { handleToast } = useToast();

    const { templates }: { templates: Template[] } = useTemplate();
    const [newTemplate, setNewTemplate] = useState(templates);
    useEffect(() => {
        filter("all")
    }, [templates])

    const filter = (status: string) => {
        const newTemp = templates?.filter((temp) => {
            if (status === "all") {
                return temp.status !== "trash"
            }
            else if (status === "draft") {
                return temp.status === status
            }
            else if (status === "trash") {
                return temp.status === status
            }
            else {
                return "halwa"
            }
        })
        setNewTemplate(newTemp)
    }

    const moveTrash= async(id: string)=>{
        const response=await fetch(`http://localhost:5000/template/update/${id}`, {
        method: 'PATCH',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({status:"trash"}),
      });
      console.log(response)
    }

    const deleteTemplate = async (id: string) => {
        console.log(id)
        const res = await fetch(`http://localhost:5000/template/delete/${id}`, {
            method: 'DELETE',
            credentials: "include"
        })
        const data = await res.json();
        handleToast(data?.success, data.message);
    }

    return (
        <main>
            <div>
                <span onClick={() => {
                    filter("all")
                }}>All</span>
                <span onClick={() => {
                    filter("draft")
                }}>Draft</span>
                <span onClick={() => {
                    filter("trash")
                }}>Trash</span>
            </div>
            <section className="table-box">
                <table className="table-container">
                    <thead className="table-header">
                        <tr>
                            <td>
                                <input name='checkbox' type="checkbox" />
                            </td>
                            <th>
                                <span>Title</span>
                            </th>
                            <th>
                                <span>Author</span>
                            </th>
                            <th>
                                <span>Categories</span>
                            </th>
                            <th>
                                <span>Tags</span>
                            </th>
                            <th>
                                <span>Date</span>
                            </th>
                            <th>
                                <span>Views</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {newTemplate?.map((template) => {
                            const updatedAt = template?.updatedAt?.split("T") as string[]

                            return (
                                <tr key={template?._id}>
                                    <td>
                                        <input name='checkbox' type="checkbox" />
                                    </td>
                                    <td className='titile-td'>
                                        <div>
                                            <span className="template-title">{template?.template_name}</span>
                                        </div>
                                        <div className="template-action">
                                            <span className="template-edit">
                                                <Link to={`/dashboard/templates/manage/${template?.template_name}/edit`}>Edit</Link>
                                            </span> | <span className="template-preview">
                                                <Link to={`/dashboard/templates/manage/${template?.template_name}/view`}>Preview</Link>
                                            </span> |{template?.status==="trash"?<span className='trash' onClick={() => { deleteTemplate(template?._id as string) }}>Trash</span>:<span className='delete' onClick={() => { moveTrash(template?._id as string) }}> Trash</span>} 

                                        </div>
                                    </td>
                                    <td>
                                        <span>{template?.user_id?.name}</span>
                                    </td>
                                    <td>
                                        <span>Categories</span>
                                    </td>
                                    <td>
                                        <span>{template?.stacks?.join(", ")}</span>
                                    </td>
                                    <td>
                                        <div>
                                            <span>Modify : {updatedAt[0]} at {updatedAt[1].split(".")[0]}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <button>390</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot className="table-footer">
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <th>
                                <span>Title</span>
                            </th>
                            <th>
                                <span>Author</span>
                            </th>
                            <th>
                                <span>Categories</span>
                            </th>
                            <th>
                                <span>Tags</span>
                            </th>
                            <th>
                                <span>Date</span>
                            </th>
                            <th>
                                <span>Views</span>
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </section>
        </main>

    )
}

export default TemplateListsPage