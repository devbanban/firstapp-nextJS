export default function Header() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand text-white" href="/">
             Next Js Project
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active text-white" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="/about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="/contact">
                    Contact
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link text-white" href="https://devbanban.com/?p=2867">
                    คอร์สออไลน์
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link text-white" href="https://devbanban.com/?p=4425">
                    ระบบพร้อมใช้
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link text-white" href="https://devbanban.com/?p=4783">
                    คลิปสอนระบบแจ้งซ่อม
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link text-white" href="https://devbanban.com/?p=4320">
                    คลิปสอนระบบเช็คชื่อออนไลน์
                  </a>
                </li>
 
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
    
}