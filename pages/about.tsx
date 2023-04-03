import Header from "../components/Header";
import Layout from "../components/Layout";
import Image from "next/image";

export default function About() {
  return (
     <Layout>
   <>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
            <div class="alert alert-info" role="alert">
                <b> มารู้จักกัน </b>
              </div>
              </div>
              <div class="col-sm-3"></div>
              <div class="col-sm-5"> 
              <div class="text-center">
              <Image
                  src="/imgs/1.jpg"
                  width={150}
                  height={100}
                  class="rounded"
                />
                </div>

                <br /> 
 
              <h5>

            
                Name : Mr.Pisit  <br /> 
                Website : https://devbanban.com/ <br /> 
                Youtube : https://www.youtube.com/c/devbanban <br /> 
                รายการระบบที่มีขายทั้งหมด : <a href="https://devbanban.com/?p=4425" target="_blank"> คลิก </a>
                </h5>
            </div>
            </div>
            </div>
    </>
  </Layout>
  );
}
