let newTaskDOM=function(t){return t.category?$(`<div class="card m-2" id="card-${t._id}">\n        <div class="card-body text-start">\n            <h5 class="card-title">\n            \n            <button type="button" class="btn btn-outline-danger float-end"\n                data-bs-toggle="modal" data-bs-target="#deleteModal-${t._id}">\n                <i class="fa-solid fa-trash-can "></i>\n            </button>\n            </h5>\n            <h5 class="card-title"><span class="badge rounded-pill bg-dark ">\n                    ${t.category}\n                </span> </h5>\n            <p class="card-text">${t.title}</p>\n\n            <input type="checkbox" class="float-end checkbox-round" id="${t._id}">\n            <i class="fa-regular fa-flag m-1"></i>\n            <span class="">${t.due_date}</span>\n        </div>\n </div>\n <div class="modal fade" id="deleteModal-${t._id}" tabindex="-1"\naria-labelledby="#modalLabel-${t._id}" aria-hidden="true">\n<div class="modal-dialog">\n    <div class="modal-content">\n        <div class="modal-header">\n            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n        </div>\n        <div class="modal-body fs-5">\n            Task once deleted <strong>cannot</strong> be retrieved\n        </div>\n        <div class="modal-footer">\n            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>\n            <button type="button" id="delete-${t._id}" class="btn btn-danger delete-button"\n                data-bs-dismiss="modal">\n                Delete<i class="fa-solid fa-trash m-1  "></i>\n            </button>\n        </div>\n    </div>\n</div>\n</div>`):$(`<div class="card m-2" id="card-${t._id}">\n                        <div class="card-body text-start">\n                            <h5 class="card-title">\n                            \n                            <button type="button" class="btn btn-outline-danger float-end"\n                                data-bs-toggle="modal" data-bs-target="#deleteModal-${t._id}">\n                                <i class="fa-solid fa-trash-can "></i>\n                            </button>\n                            </h5>\n    \n                            <p class="card-text">${t.title}</p>\n\n                            <input type="checkbox" class="float-end checkbox-round" id="${t._id}">\n                            <i class="fa-regular fa-flag m-1"></i>\n                            <span class="">${t.due_date}</span>\n                        </div>\n                 </div>\n                 <div class="modal fade" id="deleteModal-${t._id}" tabindex="-1"\n                aria-labelledby="#modalLabel-${t._id}" aria-hidden="true">\n                <div class="modal-dialog">\n                    <div class="modal-content">\n                        <div class="modal-header">\n                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n                        </div>\n                        <div class="modal-body fs-5">\n                            Task once deleted <strong>cannot</strong> be retrieved\n                        </div>\n                        <div class="modal-footer">\n                            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>\n                            <button type="button" id="delete-${t._id}" class="btn btn-danger delete-button"\n                                data-bs-dismiss="modal">\n                                Delete<i class="fa-solid fa-trash m-1  "></i>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>`)},addTaskToSegment=function(t,e){$(`#${e}`).append(t)},create_task=function(t){t.preventDefault();let e=$("#create-task-form"),a=document.querySelector("#task-title"),n=document.querySelector("#task-date");if(document.querySelector("#title-empty-error").classList.add("d-none"),document.querySelector("#invalid-date-error").classList.add("d-none"),a.value)if(n.value){var d=document.querySelector(".modal");bootstrap.Modal.getInstance(d).toggle(),$.ajax({type:"post",url:"/task/create",data:e.serialize(),success:function(t){console.log("Success"),new Noty({theme:"metroui",text:'<i class="fa-solid fa-circle-check me-1"></i>Task Created',type:"success",layout:"topRight",timeout:1500}).show();let e=newTaskDOM(t.data.task);e.find('input[type="checkbox"]').get(0).addEventListener("change",toggleStatusListner),e.find(".delete-button").get(0).addEventListener("click",deleteTaskListner),addTaskToSegment(e,t.data.segment),$("#create-task-form")[0].reset(),setToToday()},error:{function(t){console.log(t)}}})}else document.querySelector("#invalid-date-error").classList.remove("d-none");else document.querySelector("#title-empty-error").classList.remove("d-none")},newTaskSubmit=document.querySelector("#create-task-form-submit");newTaskSubmit.addEventListener("click",create_task);