const input = document.querySelector(".inp");
const header = document.querySelector(".first")
const submit = document.querySelector(".sub")
const newdate = document.querySelector(".newDate");
const updateddate = document.querySelector(".second");
const updatetime = document.querySelector(".newTime");
const updatelocation = document.querySelector(".third");
const inpUpdateLocation = document.querySelector(".newLocation");
const updatedescription = document.querySelector(".descr");
const inpDescription = document.querySelector(".newDescription");
const updateCategories = document.querySelector(".forth");
const inpCategories = document.querySelector(".newCategories")

window.addEventListener("DOMContentLoaded", () => {
  const savedData = JSON.parse(localStorage.getItem("eventData"));
  if (savedData) {
    header.textContent = savedData.title || "Music Party";
    updateddate.textContent = savedData.date || "Saturday, Oct 12, 2025, 7AM - 4PM";
    updatelocation.textContent = savedData.location || "9th mile gorkha bosti";
    updatedescription.textContent = savedData.description || "Lorem ipsum...";
    updateCategories.textContent = savedData.categories || "Music, Community, Party";
  }
});

function handleClick() {
    const newheading = input.value;

      if(newheading.trim() !== "") {
          header.textContent = newheading;
      }

      const newdatevalue = newdate.value;
      const UpdatedTime = updatetime.value;

      if(newdatevalue&&UpdatedTime.trim() !== "") {
        updateddate.textContent = newdatevalue + ", " + UpdatedTime;    
      }

      const newlocationvalue = inpUpdateLocation.value;

      if(newlocationvalue.trim() !== "") {
        updatelocation.textContent = newlocationvalue;
      }

      const newDescriptionValue = inpDescription.value;

      if(newDescriptionValue.trim() !== "") {
        updatedescription.textContent = newDescriptionValue;
      }

      const newCategoriesValue = inpCategories.value;

      if(newCategoriesValue.trim() !== "") {
        updateCategories.textContent = newCategoriesValue;
      }

        const eventData = {
    title: header.textContent,
    date: updateddate.textContent,
    location: updatelocation.textContent,
    description: updatedescription.textContent,
    categories: updateCategories.textContent
  };

  localStorage.setItem("eventData", JSON.stringify(eventData));
}

submit.addEventListener("click", handleClick);

 document.getElementById("joinForm").addEventListener("submit", async function(e) {
      e.preventDefault();
      
      const formData = {
        name: this.name.value,
        email: this.email.value,
        phone: this.phone.value
      };

      const res = await fetch("/join-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const text = await res.text();
      alert(text);
      this.reset();
    });

submit.addEventListener("click", handleClick);