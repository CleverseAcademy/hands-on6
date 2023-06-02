const host = "api.minireg.thanayut.in.th"

const fetchData = async () => {
  try {
    const response = await fetch(`https://${host}/courses`)
    const jsonData = await response.json()

    return jsonData.courses
  } catch (err) {
    console.log(err)
  }
  // console.log(jsonData)

  // fetch(`https://${host}/courses`)
  //   .then((res) => res.json())
  //   .then((data) => data.courses);
}

const appendCoursesToExistingDiv = (courses) => {
  const container = document.getElementById("courses-container")

  courses.forEach((course) => {
    const section = document.createElement("section")
    section.classList.add("course")
    section.innerHTML = `<h3>${course.courseNo} ${course.abbrName}</h3>
                         <h4>จำนวนหน่วยกิต</h4>
                         <p>${course.credit} หน่วยกิต</p>
                         <h4>ภาควิชา/กลุ่มวิชา/สาขาวิชา</h4>
                         <p>${course.department}</p>
                         <h4>ประเภท GenEd</h4>
                         <p>${
                           course.genEdType === "NO"
                             ? "ไม่ใช่ GenEd"
                             : course.genEdType
                         }</p>
                        `
    container.appendChild(section)
  })
}

document.addEventListener("DOMContentLoaded", async () => {
  const courses = await fetchData()
  console.log(courses)

  appendCoursesToExistingDiv(courses)
})
