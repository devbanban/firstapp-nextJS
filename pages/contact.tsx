import Header from "../components/Header";
import Layout from "../components/Layout";


export default function Contact() {
  return (
     <Layout>
      <>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
            <div class="alert alert-info" role="alert">
                <b> ข้อมูลการติดต่อ </b>
              </div>
            </div>
            <div class="col-sm-2"></div>
            <div class="col-sm-10">
              <h4>กรุณาระบุข้อมูลที่ต้องการติดต่อให้ครบถ้วน</h4>
              <form action="">

                <div class="row mt-3">
                  <div class="col-sm-1">ชื่อสกุล :</div>
                  <div class="col-sm-4"> 
                  <input type="text" name="name" class="form-control" placeholder="name"  required />
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-sm-1">อีเมล :</div>
                  <div class="col-sm-4"> 
                  <input type="email" name="email" class="form-control" placeholder="email"  required />
                  </div>
                </div>  

                <div class="row mt-3">
                  <div class="col-sm-1">เบอร์โทร :</div>
                  <div class="col-sm-4"> 
                  <input type="text" name="phone" class="form-control" placeholder="เบอร์โทร" required />
                  </div>
                </div>  

                <div class="row mt-3">
                  <div class="col-sm-1">รายละเอียด :</div>
                  <div class="col-sm-4"> 
                   <textarea name="detail" required cols="30" rows="5" class="form-control" placeholder="รายละเอียด :"></textarea>
                  </div>
                </div> 

                <div class="row mt-3">
                  <div class="col-sm-1"></div>
                  <div class="col-sm-4"> 
                  <div class="d-grid gap-2 mt-1">
                  <button class="btn btn-primary"> ส่งข้อมูล </button>
                  </div>
                  </div>
                </div>                   
                
                
              </form>
            </div>
            </div>
            </div>
      </>
  </Layout>
  );
}
