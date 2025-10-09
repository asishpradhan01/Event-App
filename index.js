const input = document.querySelector(".inp");
const header = document.querySelector(".first");
const submit = document.querySelector(".sub");
const newdate = document.querySelector(".newDate");
const updateddate = document.querySelector(".second");
const updatetime = document.querySelector(".newTime");
const updatelocation = document.querySelector(".third");
const inpUpdateLocation = document.querySelector(".newLocation");
const updatedescription = document.querySelector(".descr");
const inpDescription = document.querySelector(".newDescription");
const updateCategories = document.querySelector(".forth");
const inpCategories = document.querySelector(".newCategories");


window.addEventListener("DOMContentLoaded", () => {
  if (header) {
    const savedData = JSON.parse(localStorage.getItem("eventData"));
    if (savedData) {
      header.textContent = savedData.title || "Music Party";
      updateddate.textContent = savedData.date || "Saturday, Oct 12, 2025, 7AM - 4PM";
      updatelocation.textContent = savedData.location || "9th mile gorkha bosti";
      updatedescription.textContent = savedData.description || "Lorem ipsum...";
      updateCategories.textContent = savedData.categories || "Music, Community, Party";
    }
  }
});


if (submit) {
  submit.addEventListener("click", () => {
    const newheading = input.value.trim();
    if (newheading) header.textContent = newheading;

    const newdatevalue = newdate.value;
    const UpdatedTime = updatetime.value.trim();
    if (newdatevalue && UpdatedTime) updateddate.textContent = `${newdatevalue}, ${UpdatedTime}`;

    const newlocationvalue = inpUpdateLocation.value.trim();
    if (newlocationvalue) updatelocation.textContent = newlocationvalue;

    const newDescriptionValue = inpDescription.value.trim();
    if (newDescriptionValue) updatedescription.textContent = newDescriptionValue;

    const newCategoriesValue = inpCategories.value.trim();
    if (newCategoriesValue) updateCategories.textContent = newCategoriesValue;

    const eventData = {
      title: header.textContent,
      date: updateddate.textContent,
      location: updatelocation.textContent,
      description: updatedescription.textContent,
      categories: updateCategories.textContent,
    };

    localStorage.setItem("eventData", JSON.stringify(eventData));
  });
}


const joinForm = document.getElementById("joinForm");

if (joinForm) {
  joinForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
    };

    try {
      const res = await fetch("https://local-event-app.onrender.com/join-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const text = await res.text();
      alert(text);
      this.reset();
    } catch (error) {
      alert("Something went wrong! Please try again later.");
      console.error(error);
    }
  });
}
