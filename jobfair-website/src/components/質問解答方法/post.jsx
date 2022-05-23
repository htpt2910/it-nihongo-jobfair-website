import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./post.css";

function Post() {
    const [send, set_Send] = useState('')
    const handlerSend = (e) => {
        set_Send(e.target.value)
    }
    const show_upload = () => {
        document.getElementById('file_upload_id').click();
    }
    const [image, set_image] = useState(null)
    const handler_Change_Image = (e) => {
        if (e.target.files && e.target.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {

                var show_image = document.getElementById('show_image_status')

                show_image.setAttribute('src', e.target.result)

            };

            reader.readAsDataURL(e.target.files[0]);

            set_image(e.target.files[0])

        }

        document.getElementById('group_get_image').setAttribute('style', 'display: block')
    }
    const [list_post_home, set_list_post_home] = useState([])

    const [reload, set_reload] = useState(false)
    const Like = () => {
        return(
            <i className="fa fa-heart-o" 
            
            style="fontSize: 30px; cursor: pointer; background: red;" ></i>
        )
    }
    return (
        <div className="container mt-2 pt-8">
            <div className="row">
                <div className="col-sm-9">
                    <div className="content_home">
                        <div className="box_status d-flex">
                            <img className="img_status" src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt="" />
                            <span className="a_status" data-toggle="modal" data-target="#exampleModalLong">Bạn đang nghĩ cái gì thế!</span>

                            <div className="modal fade mt-5" id="exampleModalLong" tabIndex="-1" role="dialog" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Tạo Bài Viết</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="sub_header d-flex">
                                                <img src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt="" />
                                                <span className="a_sub_header mt-2">user1</span>
                                            </div>
                                            <div className="sub_body mt-2">
                                                <textarea value={send} onChange={handlerSend} className="txt_area_sub" rows="2" placeholder="Bạn đang nghĩ gì?"></textarea>
                                                <div className="group_scroll" id="group_get_image" style={{ display: 'none' }}>
                                                    <div className="get_image">
                                                        <img className="img_sub_body" id="show_image_status" />
                                                    </div>
                                                </div>
                                                
                                                <div className="d-flex justify-content-between">
                                                    <input type="file" name="file" onChange={handler_Change_Image} id="file_upload_id" style={{ display: 'none' }} /> 
                                                    <i className="fa fa-file-image-o fix_icon" onClick={show_upload}  style={{ cursor: 'pointer', fontSize: '24px', color: '#41B35D' }}></i>
                                                    
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary btn_sub_footer" 
                                                data-dismiss="modal" aria-label="Close"
                                                >Đăng</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box_poster_user">
                            
                                
                                    <div className="box_poster_another mt-4 mb-4" >
                                        <a  className="post_header d-flex p-3">
                                            <img src= "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt="" className="image_post_header" />
                                            <span className="span_post_header">user01</span>
                                        </a>
                                        <div className="post_body">
                                            <a 
                                                >
                                                <img src="" alt="" className="image_post_body" />
                                            </a>
                                            <div className="action_post_body d-flex justify-content-between">
                                                <div className="left_action p-3">
                                                    {
                                                        // value.status_like ? <i className="fa fa-heart" onClick={() => handler_Click_Untym(value.id_image_post, value.id_user_following)} style={{ fontSize: '30px', cursor: 'pointer', color: '#f14444' }}></i> :
                                                            <i className="fa fa-heart-o" 
                                                                onClick={() => Like() }
                                                                style={{ fontSize: '30px', cursor: 'pointer', }}></i>
                                                    }
                                                    <i className="fa fa-comment-o ml-3" style={{ fontSize: '30px', cursor: 'pointer' }}></i>
                                                    <i className="fa fa-send-o ml-3" style={{ fontSize: '30px', cursor: 'pointer' }}></i>
                                                </div>
                                                <div className="right_action p-3">
                                                    <i className="fa fa-star-o" style={{ fontSize: '30px', cursor: 'pointer' }}></i>
                                                </div>
                                            </div>
                                            

                                            <div className="caption_user mt-2">
                                                <span className="ml-3" style={{ fontWeight: '600', fontSize: '1rem' }}>user01</span> &nbsp;
                                            <span className="img_title">
                                                    
                                                    
                                            </span>
                                            </div>
                                            {/* <Link className="ml-3" style={{ color: 'gray' }} to={
                                                value.id_user_following === '' ? 
                                                `/post/${value.id_image_post}_${sessionStorage.getItem('id_user')}` : 
                                                `/post/${value.id_image_post}_${value.id_user_following}`
                                            }>View all {value.comment} comment</Link> */}
                                        </div>
                                        <hr />
                                        <div className="post_footer d-flex pl-3 pr-3 pb-3">
                                            <i className="fa fa-smile-o fa-2x icon_footer" style={{ cursor: 'pointer' }}></i>
                                            <input className="input_footer ml-3" type="text" placeholder="Add a comment" />
                                            <span className="send_footer ml-3 mt-1">Post</span>
                                        </div>                 
                                    </div>
                            
                            

                        </div>

                    </div>
                </div>
                
            </div>
        </div>
    
    )
}

export default Post