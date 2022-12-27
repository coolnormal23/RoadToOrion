lastselect = "m4list";
lastparent = "arbutton";
lastlist = "arlist"

function undoAll()
{
    //undo all selects
    document.getElementById(lastselect).style.fontWeight="normal";
    document.getElementById(lastparent).style.fontWeight="normal";
    document.getElementById(lastlist).style.display="none";
}

function showMenu(id)
{
    switch(id)
    {
        case "arlist":
            {
                //unbold and undo
                undoAll();
                //show gun list
                document.getElementById("arlist").style.display="block";
                //bold button
                document.getElementById("arbutton").style.fontWeight="bold";

                lastselect = "arbutton";
                lastparent = "arbutton";
                lastlist = "arlist";
                break;
            }
        case "smglist":
            {
                //unbold and undo
                undoAll();
                //show gun list
                document.getElementById("smglist").style.display="block";
                //bold button
                document.getElementById("smgbutton").style.fontWeight="bold";

                lastselect = "smgbutton";
                lastparent = "smgbutton";
                lastlist = "smglist";
                break;
            }
        case "brlist":
            {
                //unbold and undo
                undoAll();
                //show gun list
                document.getElementById("brlist").style.display="block";
                //bold button
                document.getElementById("brbutton").style.fontWeight="bold";

                lastselect = "brbutton";
                lastparent = "brbutton";
                lastlist = "brlist";
                break;
            }
        case "shotgunlist":
            {
                //unbold and undo
                undoAll();
                //show gun list
                document.getElementById("shotgunlist").style.display="block";
                //bold button
                document.getElementById("shotgunbutton").style.fontWeight="bold";

                lastselect = "shotgunbutton";
                lastparent = "shotgunbutton";
                lastlist = "shotgunlist";
                break;
            }
        case "lmglist":
            {
                //unbold and undo
                undoAll();
                //show gun list
                document.getElementById("lmglist").style.display="block";
                //bold button
                document.getElementById("lmgbutton").style.fontWeight="bold";

                lastselect = "lmgbutton";
                lastparent = "lmgbutton";
                lastlist = "lmglist";
                break;
            }
        case "mrlist":
            {
                //unbold and undo
                undoAll();
                //show gun list
                document.getElementById("mrlist").style.display="block";
                //bold button
                document.getElementById("mrbutton").style.fontWeight="bold";

                lastselect = "mrbutton";
                lastparent = "mrbutton";
                lastlist = "mrlist";
                break;
            }
        case "sniperlist":
            {
                //unbold and undo
                undoAll();
                //show gun list
                document.getElementById("sniperlist").style.display="block";
                //bold button
                document.getElementById("sniperbutton").style.fontWeight="bold";

                lastselect = "sniperbutton";
                lastparent = "sniperbutton";
                lastlist = "sniperlist";
                break;
            }
        case "meleelist":
            {
                //unbold and undo
                undoAll();
                //show gun list
                document.getElementById("meleelist").style.display="block";
                //bold button
                document.getElementById("meleebutton").style.fontWeight="bold";

                lastselect = "meleebutton";
                lastparent = "meleebutton";
                lastlist = "meleelist";
                break;
            }
        case "handgunlist":
            {
                //unbold and undo
                undoAll();
                //show gun list
                document.getElementById("handgunlist").style.display="block";
                //bold button
                document.getElementById("handgunbutton").style.fontWeight="bold";

                lastselect = "handgunbutton";
                lastparent = "handgunbutton";
                lastlist = "handgunlist";
                break;
            }
        case "launcherlist":
            {
                //unbold and undo
                undoAll();
                //show gun list
                document.getElementById("launcherlist").style.display="block";
                //bold button
                document.getElementById("launcherbutton").style.fontWeight="bold";

                lastselect = "launcherbutton";
                lastparent = "launcherbutton";
                lastlist = "launcherlist";
                break;
            }
    }
}

document.getElementById("arbutton").onclick = function() {showMenu("arlist")};
document.getElementById("brbutton").onclick = function() {showMenu("brlist")};
document.getElementById("smgbutton").onclick = function() {showMenu("smglist")};
document.getElementById("shotgunbutton").onclick = function() {showMenu("shotgunlist")};
document.getElementById("lmgbutton").onclick = function() {showMenu("lmglist")};
document.getElementById("mrbutton").onclick = function() {showMenu("mrlist")};
document.getElementById("sniperbutton").onclick = function() {showMenu("sniperlist")};
document.getElementById("meleebutton").onclick = function() {showMenu("meleelist")};
document.getElementById("handgunbutton").onclick = function() {showMenu("handgunlist")};
document.getElementById("launcherbutton").onclick = function() {showMenu("launcherlist")};