import graphene
import pandas as pd
import os
from django.http import HttpResponse
from graphene_django.types import DjangoObjectType
from django.conf import settings

# Define the path to the CSV file
CSV_FILE_PATH = os.path.join(settings.BASE_DIR, "api", "challenges.csv")

# Define Challenge GraphQL type
class ChallengeType(graphene.ObjectType):
    ChallengeID = graphene.Int()
    ChallengeName = graphene.String()
    ChallengeSucessRate = graphene.Int()

class Query(graphene.ObjectType):
    challenges = graphene.List(ChallengeType)

    def resolve_challenges(self, info):
        """Fetch challenge data from CSV and return as JSON."""
        try:
            df = pd.read_csv(CSV_FILE_PATH)
            return df.to_dict(orient="records")
        except Exception as e:
            return []

class DownloadCSV(graphene.Mutation):
    success = graphene.Boolean()
    message = graphene.String()
    download_url = graphene.String()

    def mutate(self, info):
        """Return a download link for the CSV file."""
        return DownloadCSV(
            success=True,
            message="Download the CSV file",
            download_url="/api/challenges/download/",
        )

class Mutation(graphene.ObjectType):
    download_csv = DownloadCSV.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)
