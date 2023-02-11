import cv2, os
from pathlib import Path

DATA_FILE = Path(r".\scoutDatabase.csv")

cap = cv2.VideoCapture(0)
# initialize the cv2 QRCode detector
detector = cv2.QRCodeDetector()

lastGoodData = ''

# Init the database if it's not there
if not os.path.isfile(DATA_FILE):
    if not os.path.isdir(DATA_FILE.parent.absolute()):
        os.makedirs()
    with open(DATA_FILE, 'w') as dataFile:
        dataFile.write("header,header,header\n") #TODO fill out proper header rows

while True:
    # Loop grabbing frames from the camera
    _, img = cap.read()
    try:
        data, bbox, _ = detector.detectAndDecode(img)
    except Exception as e:
        # print(e)
        continue #meh give up if image isn't readable

    # check if there is a QRCode in the image
    if data != '' and data != lastGoodData:
        print("Got new data " + data)

        # Appending to file
        with open(DATA_FILE, 'a') as dataFile:
            dataFile.write(data)

        print("saved!")

        lastGoodData = data
        

    # Keep the display up to date 
    cv2.imshow("QRCODEscanner", img)    

    if cv2.waitKey(1) == ord("q"):
        break
    if cv2.getWindowProperty("QRCODEscanner", cv2.WND_PROP_VISIBLE) <1:
        break

cap.release()
cv2.destroyAllWindows()