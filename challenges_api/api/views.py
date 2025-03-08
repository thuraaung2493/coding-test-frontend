import os
from django.http import HttpResponse
from django.conf import settings

def download_csv(request):
    """Allow users to download the CSV file."""
    csv_path = os.path.join(settings.BASE_DIR, "api", "challenges.csv")
    try:
        with open(csv_path, "r") as file:
            response = HttpResponse(file, content_type="text/csv")
            response["Content-Disposition"] = 'attachment; filename="challenges.csv"'
            return response
    except Exception as e:
        return HttpResponse(f"Error: {str(e)}", status=500)
