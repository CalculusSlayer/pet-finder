from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse  # Add this line to your imports
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
import csv
import os

# Define the function to write data to a CSV file
def write_to_csv(data, filename='pets.csv'):
    # Define the field names for the CSV
    fieldnames = ['name', 'height', 'breed', 'color', 'lastSeen', 'latitude', 'longitude']
    
    # Check if the file exists and if we need to write headers
    try:
        with open(filename, 'x', newline='') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()  # Writing the header if the file is new/does not exist
            writer.writerow(data)
    except FileExistsError:
        # File already exists, append without writing headers
        with open(filename, 'a', newline='') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writerow(data)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins, or you can specify your frontend's URL
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

class Pet(BaseModel):
    name: str
    height: str
    breed: str
    color: str
    lastSeen: str
    latitude: str
    longitude: str

@app.post("/submit-pet")
async def submit_pet(pet: Pet):
    print(pet)
    write_to_csv(pet.dict())
    return {"message": "Pet received", "data": pet.dict()}

@app.get("/pets")
async def get_pets():
    filename = 'pets.csv'
    if os.path.isfile(filename):
        return FileResponse(filename, media_type='text/csv', filename=filename)
    else:
        raise HTTPException(status_code=404, detail="Pets file not found")

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
