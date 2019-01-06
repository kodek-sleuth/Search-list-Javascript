var filterSearch = document.getElementById('search');
filterSearch.addEventListener('keyup', filterList)

function filterList()
{
    var filterValue = document.getElementById('search').value.toUpperCase();

    var h3 = document.getElementsByTagName('h3');

    Array.from(h3).forEach(function(name)
    {
        var grabNameText = name.firstChild.textContent;
        if(grabNameText.toUpperCase().indexOf(filterValue) > -1)
        {
            name.style.display = '';
        }

        else
        {
            name.style.display = 'none';
        }

    });

}
