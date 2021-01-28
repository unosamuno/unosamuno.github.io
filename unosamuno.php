<!DOCTYPE html>
<html>

<head>
    <title>booking request</title>
    <meta charset="utf8">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="css/unosamuno.css">
</head>

<body>
    <?php

    //function to return the amount of hours set to be played, including cookie evaluation
    function getAmountofHours()
    {
        if (isset($_POST['booking'])) {
            if (isset($_POST['hours'])) {
                $amountofhours = $_POST['hours'];
            } else {
                echo "<p>Please select the amount of hours you want me to play.</p>";
                return;
            }
            setcookie("hours", $amountofhours, time() + 3600);
        } elseif (isset($_COOKIE['hours'])) {
            $amountofhours = $_COOKIE['hours'];
        } else {
            echo "<p>Please select the amount of hours you want me to play.</p>";
            return;
        }
        return $amountofhours;
    }

    //function to return the type of event to be played, including cookie evaluation
    function getEventtype()
    {
        if (isset($_POST['booking'])) {
            if (isset($_POST['eventtype'])) {
                $eventtype = $_POST['eventtype'];
            } else {
                echo "<p>Please choose an eventtype.</p>";
                return;
            }
            setcookie("eventtype", $eventtype, time() + 3600);
        } elseif (isset($_COOKIE['eventtype'])) {
            $eventtype = $_COOKIE['eventtype'];
        } else {
            echo "<p>Please choose an eventtype.</p>";
            return;
        }
        return $eventtype;
    }

    //function to return the checkbox status for equipment, including cookie evaluation
    function getEquipmentStatus()
    {
        if (isset($_POST['booking'])) {
            if (isset($_POST['equipment'])) {
                $equipment = $_POST['equipment'];
            } else {
                $equipment = false;
            }
            setcookie("equipment", $equipment, time() + 3600);
        } elseif (isset($_COOKIE['equipment'])) {
            $equipment = $_COOKIE['equipment'];
        } else {
            $equipment = false;
            setcookie("equipment", $equipment, time() + 3600);
        }
        return $equipment;
    }

    // function to calculate the booking fee, including cookie evaluation
    function CalculateBookingFee($amountofhours, $eventtype, $equipment)
    {
        $fee = 0;
        if ($equipment) {
            $fee += 100;
        }
        $fee += $amountofhours * 200;

        if ($eventtype == "wedding") {
            $fee += 100;
        }
        return $fee;
    }

    $hours = getAmountofHours();
    $event = getEventtype();
    $equipment = getEquipmentStatus();
    $bookingfee = CalculateBookingFee($hours, $event, $equipment);

    setcookie("bookingfee", $bookingfee, time() + 3600);

    if (isset($_POST['booking'])) {
        echo "<h1>The Booking fee is " . $bookingfee . ".- CHF</h1>";
    } else if (isset($_POST['send'])) {
        echo "<h1>The Booking fee is " . $bookingfee . ".- CHF</h1>";
        echo "<h1>Thank you for your Inquiry. <br> It was sent to </h1>";
        echo '<h1>samuelhuser@gmail.com</h1>';
        echo "<h1> I will contact you asap. </h1>";
    } else {
        return "<h1>Something went wrong.</h1>";
    }

    ?>
    <br>
    <button class="w3-button w3-green"><a href="index.html">back to the bookingsite</a></button>
</body>

</html>